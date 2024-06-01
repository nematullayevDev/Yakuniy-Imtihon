async function GetToken() {
  function toTimesTamp(expireData) {
    const dateString = expireData;
    const [datePart, timePart] = dateString.split(" ");
    const [day, month, year] = datePart.split(".");
    const formattedDateString = `${month}/${day}/${year} ${timePart}`;
    const dateObject = new Date(formattedDateString);
    const timestamp = dateObject.getTime();

    return timestamp;
  }

  function isExpiredToken() {
    let expireData = localStorage.getItem("expireDate");
    if (!expireData) {
      return true;
    }

    let expDate = toTimesTamp(expireData);
    let currentDate = Date.now();

    if (expDate < currentDate) {
      return true;
    }

    return false;
  }

  let is = isExpiredToken();
  console.log(is);

  if (
    !localStorage.getItem("expireData") ||
    !localStorage.getItem("token") ||
    isExpiredToken()
  ) {
    const resp = await fetch(import.meta.env.VITE_API_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          import.meta.env.VITE_CLINET_ID + ":" + import.meta.env.VITE_SECRET_KEY
        )}`,
      },
      body: "grant_type=client_credentials",
    });
    const auth = await resp.json();
    const expireDate = getOneHourLaterFormatted();
    localStorage.setItem("expireDate", expireDate);
    localStorage.setItem("token", auth.access_token);

    return {
      date: expireDate,
      token: auth.access_token,
    };
  } else {
    return {
      date: localStorage.getItem("expireDate"),
      token: localStorage.getItem("token"),
    };
  }
}

function getOneHourLaterFormatted() {
  // Get the current date and time
  const currentDate = new Date();

  // Add one hour (60 minutes * 60 seconds * 1000 milliseconds)
  const oneHourLater = new Date(currentDate.getTime() + 60 * 60 * 1000);

  // Format the date and time
  const day = String(oneHourLater.getDate()).padStart(2, "0");
  const month = String(oneHourLater.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = oneHourLater.getFullYear();
  const hours = String(oneHourLater.getHours()).padStart(2, "0");
  const minutes = String(oneHourLater.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export { GetToken };

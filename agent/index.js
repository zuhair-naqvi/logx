const fetch = require("cross-fetch");

const server = "http://192.168.0.149:3000";

const sample = {
  foo: "baz",
};

(async () => {
  try {
    const res = await fetch(server, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sample),
    });

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    const user = await res.json();

    console.log(user);
  } catch (err) {
    console.error(err);
  }
})();

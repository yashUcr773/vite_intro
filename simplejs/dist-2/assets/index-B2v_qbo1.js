(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const viteLogo = "/vite.svg";
const heartSVG = "/heart.svg";
const javascriptLogo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e";
const likeSVG = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.2694%2016.265L20.9749%2012.1852C21.1511%2011.1662%2020.3675%2010.2342%2019.3345%2010.2342H14.1534C13.6399%2010.2342%2013.2489%209.77328%2013.332%209.26598L13.9947%205.22142C14.1024%204.56435%2014.0716%203.892%2013.9044%203.24752C13.7659%202.71364%2013.354%202.28495%2012.8123%202.11093L12.6673%202.06435C12.3399%201.95918%2011.9826%201.98365%2011.6739%202.13239C11.3342%202.29611%2011.0856%202.59473%2010.9935%202.94989L10.5178%204.78374C10.3664%205.36723%2010.146%205.93045%209.8617%206.46262C9.44634%207.24017%208.80416%207.86246%208.13663%208.43769L6.69789%209.67749C6.29223%2010.0271%206.07919%2010.5506%206.12535%2011.0844L6.93752%2020.4771C7.01201%2021.3386%207.73231%2022%208.59609%2022H13.2447C16.726%2022%2019.697%2019.5744%2020.2694%2016.265Z'%20fill='%231C274C'/%3e%3cpath%20opacity='0.5'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.96767%209.48508C3.36893%209.46777%203.71261%209.76963%203.74721%2010.1698L4.71881%2021.4063C4.78122%2022.1281%204.21268%2022.7502%203.48671%2022.7502C2.80289%2022.7502%202.25%2022.1954%202.25%2021.5129V10.2344C2.25%209.83275%202.5664%209.5024%202.96767%209.48508Z'%20fill='%231C274C'/%3e%3c/svg%3e";
const londonImage = "/assets/london-o2-khIkw.jpg";
function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${heartSVG}" class="logo vanilla" alt="JavaScript logo" />
    </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${likeSVG}" class="logo vanilla" alt="JavaScript logo" />
    </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${londonImage}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
setupCounter(document.querySelector("#counter"));

fetch("https://green-app-one.vercel.app/asset-manifest.json")
  .then(res => res.json())
  .then(manifest => {
    const script = document.createElement("script");
    script.src = `https://green-app-one.vercel.app/${manifest["files"]["main.js"]}`;
    document.body.appendChild(script);
  });

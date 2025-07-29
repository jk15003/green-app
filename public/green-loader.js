fetch("http://localhost:3001/asset-manifest.json")
  .then(res => res.json())
  .then(manifest => {
    const script = document.createElement("script");
    script.src = `http://localhost:3001${manifest["files"]["main.js"]}`;
    document.body.appendChild(script);
  });

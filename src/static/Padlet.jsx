const Padlet = () => {
    return(
        <div className="padlet-embed" style={{border: '0.2px solid rgba(0,0,0,0.1)', borderRadius: 2, boxSizing: 'border-box', overflow: 'hidden', position: 'relative', width: '100%', height: 'auto', background: '#F4F4F4'}}>
  <p style={{padding: 0, margin: 0}}>
    <iframe src="https://padlet.com/embed/auvkh0vnmftar5v1" frameBorder={0} allow="camera;microphone;geolocation" style={{width: '100%', height: 800, display: 'block', padding: 0, margin: 0}}>
    </iframe>
  </p>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'end', margin: 0, height: 28}}>
    <a href="https://padlet.com?ref=embed" style={{display: 'block', flexGrow: 0, margin: 0, border: 'none', padding: 0, textDecoration: 'none'}} target="_blank">
    </a>
  </div>
</div>

    );s
}

export default Padlet;

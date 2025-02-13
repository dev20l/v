  const style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        background: #f8f1e4;
        text-align: center;
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
    }
    
    header {
        background: #e0c78a;
        padding: 5px;
        font-size: 14px;
        font-weight: bold;
        height: 50px;
    }
    
    header span {
        color: #ffb400;
    }
    
    .home {
        display: block;
        text-decoration: none;
        color: #333;
        font-size: 18px;
        margin: 10px 0;
    }
    
    .albums {
        padding: 20px;
    }
    
    .album-header {
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        display: inline-block;
    }
    
    .buttons button {
        font-size: 20px;
        margin: 5px;
        padding: 10px;
        border: none;
        background: #ffb400;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
    
    .album-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
        margin-top: 20px;
    }
    
    .album {
        background: #fff;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: 0.3s;
    }
    
    .album:hover, .album.active {
        background: #ffb400;
        color: #fff;
    }
    
    .album img {
        width: 100px;
        height: 100px;
        display: block;
        margin: 0 auto 10px;
    }
    
    .links {
        margin-top: 20px;
        padding: 10px;
        background: #e0c78a;
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    
    .links a {
        display: block;
        margin: 5px 0;
        color: #e0c78a;
        text-decoration: none;
    }
    
    #ana {
        display: none;
        text-align: center;
        margin-top: 20px;
    }
    
    #abdo {
        width: 50%;
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }
    
    #linksContainer {
        margin-top: 1px;
    }
    
    .victor {
        background-color: #FFF;
        border: 2px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
    }
    
    .victor img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    
    .victor a {
        text-decoration: none;
        color: #007BFF;
        word-break: break-word;
    }
    
    .victor a:hover {
        text-decoration: underline;
    }
    
    .link-title {
        font-weight: bold;
        margin-right: 10px;
    }
    
    #loading {
        display: none;
        text-align: center;
        margin-top: 20px;
    }
    
    #countdown {
        font-size: 2.2em;
        margin: 10px 0;
        text-align: center;
    }
    
    #countdown img {
        width: 20px;
        height: 20px;
    }
    
    .links {
        text-align: center;
        padding: 15px;
        background-color: #e0c78a;
        border-top: 2px solid #ffb400;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }
    
    .footer-links {
        list-style: none;
        padding: 0;
        margin-top: 10px;
    }
    
    .footer-links li {
        display: inline;
        margin: 0 10px;
    }
    
    .footer-links a {
        text-decoration: none;
        color: #e0c78a;
        font-weight: bold;
    }
    
    .footer-links a:hover {
        text-decoration: underline;
    }
`;

document.head.appendChild(style);

 

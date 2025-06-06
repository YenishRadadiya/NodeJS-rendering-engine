import * as http from 'http';
import * as ejs from 'ejs';
import * as fs from 'fs';
import * as path from 'path';

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        const templatePath = path.join(process.cwd(), 'views', 'dashboard.ejs');
        const data = { title: 'Home Page', name: 'World' };

        fs.readFile(templatePath, 'utf-8', (err, template) => {
            if (err) {
                console.error('Error reading template:', err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Template loading error');
            }

            const html = ejs.render(template, data);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });
    }

    // Your static route for CSS should follow this block
    else if (req.url === '/styles/dashboard.css' && req.method === 'GET') {
        const cssPath = path.join(process.cwd(), 'styles', 'dashboard.css');
        fs.readFile(cssPath, (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('CSS Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    }

    // Fallback if no route matches
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`SSR Server running at http://localhost:${PORT}/`);
});

# MCMN Backend - Production Ready

This is a production-ready Node.js backend for the MCMN project, optimized for deployment on DigitalOcean droplets.

## 🚀 Features

- **Security**: Helmet.js, rate limiting, CORS protection
- **Performance**: Compression, optimized MongoDB connections
- **Monitoring**: PM2 process management, health checks
- **Deployment**: Docker support, automated deployment scripts
- **SSL**: Nginx reverse proxy with Let's Encrypt support
- **Logging**: Structured logging with rotation
- **Error Handling**: Global error handling and graceful shutdown

## 📁 Project Structure

```
backend/
├── server.js              # Production server entry point
├── main.js                # Development server entry point
├── package.json           # Dependencies and scripts
├── ecosystem.config.js    # PM2 configuration
├── nginx.conf            # Nginx configuration
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose setup
├── deploy.sh             # Deployment script
├── setup-server.sh       # Server setup script
├── healthcheck.js        # Health check endpoint
├── env.example           # Environment variables template
├── controllers/          # Route controllers
├── routes/              # API routes
└── logs/                # Application logs
```

## 🛠️ Installation

### Local Development

```bash
# Install dependencies
npm install

# Create environment file
cp env.example .env

# Edit .env with your configuration
nano .env

# Start development server
npm run dev
```

### Production Deployment

#### Option 1: Traditional Deployment (Recommended)

1. **Set up DigitalOcean Droplet**
   ```bash
   # SSH into your droplet
   ssh root@your-droplet-ip
   
   # Run server setup script
   chmod +x setup-server.sh
   ./setup-server.sh
   ```

2. **Deploy Application**
   ```bash
   # Copy your backend files to the server
   scp -r backend/ root@your-droplet-ip:/var/www/mcmn-backend/
   
   # SSH into server and deploy
   ssh root@your-droplet-ip
   cd /var/www/mcmn-backend
   chmod +x deploy.sh
   ./deploy.sh production
   ```

#### Option 2: Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file based on `env.example`:

```env
# Server Configuration
NODE_ENV=production
PORT=4000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/mcmn_db

# Frontend URL (for CORS)
FRONTEND_URL=https://yourdomain.com

# Security
JWT_SECRET=your-super-secret-jwt-key-here
SESSION_SECRET=your-session-secret-key-here
```

### Nginx Configuration

Update `nginx.conf` with your domain:

```nginx
server_name yourdomain.com www.yourdomain.com;
```

### SSL Certificate

```bash
# Install SSL certificate
certbot --nginx -d yourdomain.com

# Auto-renewal
crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## 📊 Monitoring

### PM2 Commands

```bash
# Check status
pm2 status

# View logs
pm2 logs mcmn-backend

# Monitor resources
pm2 monit

# Restart application
pm2 restart mcmn-backend

# Stop application
pm2 stop mcmn-backend
```

### Health Check

```bash
# Check application health
curl http://localhost:4000/health

# Expected response:
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600,
  "environment": "production"
}
```

## 🔧 Maintenance

### Logs

```bash
# Application logs
tail -f /var/log/mcmn-backend/combined.log

# Nginx logs
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log

# PM2 logs
pm2 logs
```

### Backups

```bash
# Database backup
mongodump --db mcmn_db --out /var/backups/mcmn-backend/db-$(date +%Y%m%d)

# Application backup
tar -czf /var/backups/mcmn-backend/app-$(date +%Y%m%d).tar.gz /var/www/mcmn-backend/current
```

### Updates

```bash
# Update application
cd /var/www/mcmn-backend/current
git pull origin main
npm install --only=production
pm2 reload mcmn-backend

# Update system packages
apt update && apt upgrade -y
```

## 🚨 Troubleshooting

### Common Issues

1. **Port 4000 already in use**
   ```bash
   lsof -i :4000
   kill -9 <PID>
   ```

2. **MongoDB connection failed**
   ```bash
   systemctl status mongod
   systemctl restart mongod
   ```

3. **Nginx configuration error**
   ```bash
   nginx -t
   systemctl restart nginx
   ```

4. **PM2 process not starting**
   ```bash
   pm2 delete mcmn-backend
   pm2 start ecosystem.config.js --env production
   ```

### Performance Tuning

1. **Increase Node.js memory limit**
   ```bash
   # In ecosystem.config.js
   node_args: '--max-old-space-size=2048'
   ```

2. **Optimize MongoDB**
   ```bash
   # Edit /etc/mongod.conf
   # Add: wiredTigerCacheSizeGB: 1
   ```

3. **Nginx optimization**
   ```bash
   # Edit /etc/nginx/nginx.conf
   # Increase worker_connections and worker_processes
   ```

## 📞 Support

For issues and questions:

1. Check the logs: `pm2 logs` and `tail -f /var/log/nginx/error.log`
2. Verify configuration files
3. Test endpoints: `curl http://localhost:4000/health`
4. Check system resources: `htop` and `df -h`

## 🔒 Security Checklist

- [ ] SSL certificate installed
- [ ] Firewall configured (UFW)
- [ ] Environment variables secured
- [ ] Database authentication enabled
- [ ] Regular security updates enabled
- [ ] Log monitoring in place
- [ ] Backup strategy implemented
- [ ] Rate limiting configured
- [ ] CORS properly configured
- [ ] Error messages sanitized

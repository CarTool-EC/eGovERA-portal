const express = require("express");
const path = require("path");
const router = express.Router();
const { createProxyMiddleware } = require('http-proxy-middleware');

router.post("/eira", createProxyMiddleware({ target: 'http://98852ae.online-server.cloud:7200/repositories/EIRA', changeOrigin: true }));

module.exports = router;

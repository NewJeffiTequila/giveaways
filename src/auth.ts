const jwt = require("jsonwebtoken");
const express = require("express");

//create function verify token jwt
export default function verifyJwt(req: any, res: any, next: any): any {
  const token = req.headers["authorization"];
  const decoded: any = jwt.verify(
    token,
    "secret",
    (err: Error, decoded: any) => {
      if (err) return res.send(err).status(401).end();
      req.body.userId = decoded.userId;
      next();
    }
  );
}

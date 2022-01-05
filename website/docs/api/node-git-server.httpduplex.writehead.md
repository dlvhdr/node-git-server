---
id: node-git-server.httpduplex.writehead
hide_title: true
custom_edit_url: null
title: HttpDuplex.writeHead() method
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) > [node-git-server](./node-git-server.md) > [HttpDuplex](./node-git-server.httpduplex.md) > [writeHead](./node-git-server.httpduplex.writehead.md)

## HttpDuplex.writeHead() method

Sends a response header to the client request. Must only be called one time and before calling response.end().

<b>Signature:</b>

```typescript
writeHead(statusCode: number, statusMessage: string, headers: string[]): this;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  statusCode | number | 3-digit HTTP status code, like 404 |
|  statusMessage | string | An optional human readable status message to send with the status code |
|  headers | string\[] | An object containing the response headers to send |

<b>Returns:</b>

this

## Example

var content = 'Under Construction...'; response.writeHead(200, { 'Content-Length': Buffer.byteLength(content), 'Content-Type': 'text/plain' }<!-- -->); response.end(content);
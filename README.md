# Express HTTP Exception Middleware

A simple, TypeScript-friendly middleware for handling HTTP exceptions in Express apps. Provides structured JSON error responses with optional timestamps.

---

## Installation

```bash
npm install http-exceptions-express
````

---

## Usage

### Basic Setup

```ts
import express from "express";
import { httpExceptionMiddleware, NotFoundException } from 'http-exceptions-express';

const app = express();

app.get("/hello", (req, res) => res.json({ msg: "Hello" }));

app.get("/not-found-example", () => { throw new NotFoundException(); });

// Register error middleware last
app.use(httpExceptionMiddleware({ useTimestamp: true }));

app.listen(8000);
```

### Example Error Response

Requesting `/not-found-example` will return:

```json
{
  "message": "Not Found",
  "timestamp": "2025-12-11T12:34:56.789Z"
}
```

---

## API

### `httpExceptionMiddleware(options?: { useTimestamp?: boolean })`

* `useTimestamp` (boolean, default: `false`): Include a timestamp in the error response.

Returns an Express error-handling middleware.

### `NotFoundException`

A prebuilt `HttpException` with `status = 404` and `message = "Not Found"`.

---

## Creating Custom Exceptions

```ts
import { HttpException } from '@happer64bit/http-exceptions-express';

class UnauthorizedException extends HttpException {
    constructor(message = "Unauthorized") {
        super(401, message);
    }
}

throw new UnauthorizedException();
```

---

## Notes

* **Middleware order matters**: In Express, error-handling middleware must be registered **after all routes** to catch errors properly.
* For synchronous routes, this works out-of-the-box.
* For async routes, consider wrapping with a helper like `asyncHandler` to forward errors.

---

## License

MIT

const response = {
    success: (res, data, message) => {
        const result = {
            code: 200,
            status: true,
            message: message,
            data: data
        }
        res.json(result)
    },
    failed: (res, data, message) => {
        const result = {
            code: 500,
            status: false,
            message: message,
            data: data
        }
        res.json(result)
    },
    failedReg: (res, data, message) => {
        const result = {
            code: 402,
            status: false,
            message: message,
            data: data
        }
        res.json(result)
    },
    failedLog: (res, data, message) => {
        const result = {
            code: 401,
            status: false,
            message: message,
            data: data
        }
        res.json(result)
    },
    loginSuccess: (res, id, token, refreshToken, message) => {
        const result = {
            code: 200,
            status: true,
            message: message,
            data: {
                id,
                token,
                refreshToken
            }
        }
        res.json(result)
    },
    successWithMeta: (res, data, meta, message) => {
      const result = {
          message,
          success: true,
          code: 200,
          meta,
          data,
      };
      res.status(200)
      res.json(result);
  }
}

module.exports = response
var spec = {
    "openapi": "3.0.3",
    "info": {
      "title": "MySelf",
      "description": "Documentação api",
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      "version": "1.0.11"
    },
    "servers": [
      {
        "url": "localhost"
      }
    ],
    "tags": [
      {
        "name": "invite",
        "description": "Everything about invite"
      },
      {
        "name": "invites",
        "description": "Everything about invites"
      },
      {
        "name": "event",
        "description": "Event"
      },
      {
        "name": "webhook",
        "description": "Webhook"
      }
    ],
    "paths": {
      "/person/invite": {
        "post": {
          "tags": [
            "invite"
          ],
          "summary": "Add new invite",
          "description": "Add new invite",
          "operationId": "addInvite",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "description": "Create a new invite",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Invite"
                }
              }
            },
            "required": true
          },
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success"
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        }
      },
      "/person/invite/{reference_id}": {
        "get": {
          "tags": [
            "invite"
          ],
          "summary": "get invite",
          "description": "get invite",
          "operationId": "retrieveInvite",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "reference_id",
              "in": "path",
              "description": "id de referencia",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RetrieveInvite"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        },
        "put": {
          "tags": [
            "invite"
          ],
          "summary": "update invite",
          "description": "update invite",
          "operationId": "updateInvite",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "reference_id",
              "in": "path",
              "description": "ticket number",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "description": "Update invite",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Invite"
                }
              }
            },
            "required": true
          },
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success"
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        },
        "delete": {
          "tags": [
            "invite"
          ],
          "summary": "remove invite",
          "description": "remove invite",
          "operationId": "deleteInvite",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "reference_id",
              "in": "path",
              "description": "id de referencia",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success"
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        }
      },
      "/person/invites/document_number/{document_number}": {
        "get": {
          "tags": [
            "invites"
          ],
          "summary": "get invites",
          "description": "get invites of person by document number",
          "operationId": "retrieveInvites",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "document_number",
              "in": "path",
              "description": "CPF",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "description": "pagina",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int32"
              }
            },
            {
              "name": "size",
              "in": "query",
              "description": "items por página",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int16"
              }
            }
          ],
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RetrieveInvitesPagination"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        },
        "delete": {
          "tags": [
            "invites"
          ],
          "summary": "remove invites of person",
          "description": "remove invites of person by document number",
          "operationId": "removeInvites",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "document_number",
              "in": "path",
              "description": "CPF",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success"
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        }
      },
      "/person/invites/event/{event_id}": {
        "get": {
          "tags": [
            "invites"
          ],
          "summary": "get invites",
          "description": "get invites of person by event and document number",
          "operationId": "retrieveInvitesOfEvent",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "event_id",
              "in": "path",
              "description": "id do evento",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "description": "pagina",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int32"
              }
            },
            {
              "name": "size",
              "in": "query",
              "description": "items por página",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int16"
              }
            }
          ],
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RetrieveInvitesPagination"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        }
      },
      "/person/invites/event/{event_id}/{document_number}": {
        "get": {
          "tags": [
            "invites"
          ],
          "summary": "get invites",
          "description": "get invites of person by event and document number",
          "operationId": "retrieveInvitesByDocumentNumber",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "event_id",
              "in": "path",
              "description": "id do evento",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "document_number",
              "in": "path",
              "description": "CPF",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "description": "pagina",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int32"
              }
            },
            {
              "name": "size",
              "in": "query",
              "description": "items por página",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int16"
              }
            }
          ],
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RetrieveInvitesPagination"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        },
        "delete": {
          "tags": [
            "invites"
          ],
          "summary": "remove invites of person",
          "description": "remove all invites of person by document number",
          "operationId": "removeInvitesByDocumentNumber",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "event_id",
              "in": "path",
              "description": "id do evento",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "document_number",
              "in": "path",
              "description": "CPF",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success"
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        }
      },
      "/person/invites/event/{event_id}/entries": {
        "get": {
          "tags": [
            "invites"
          ],
          "summary": "Get invites by entries",
          "description": "get invites by entries",
          "operationId": "retrieveInvitesByEntries",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "event_id",
              "in": "path",
              "description": "id do evento",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "codes",
              "in": "query",
              "description": "códigos da entrada",
              "required": true,
              "schema": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            {
              "name": "page",
              "in": "query",
              "description": "pagina",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int32"
              }
            },
            {
              "name": "size",
              "in": "query",
              "description": "items por página",
              "required": false,
              "schema": {
                "type": "integer",
                "format": "int16"
              }
            }
          ],
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RetrieveInvitesPagination"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        }
      },
      "/event/{event_id}/cancel": {
        "delete": {
          "tags": [
            "event"
          ],
          "summary": "cancel event",
          "description": "cancel event",
          "operationId": "cancelAllInvitesOfEvent",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "event_id",
              "in": "path",
              "description": "event id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success"
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        }
      },
      "/event/{event_id}/cancel/entries": {
        "post": {
          "tags": [
            "event"
          ],
          "summary": "cancel entries of event",
          "description": "cancel entries of event",
          "operationId": "cancelAllInvitesOfCategories",
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "description": "Token",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "event_id",
              "in": "path",
              "description": "event id",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "description": "Remove entries",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CancelEntries"
                }
              }
            },
            "required": true
          },
          "security": [
            {
              "api_key": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success"
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        }
      },
      "/webhook/myself": {
        "post": {
          "tags": [
            "webhook"
          ],
          "summary": "Send webhook",
          "description": "Send webhook",
          "operationId": "sendWebhook",
          "requestBody": {
            "description": "Send webhook",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/WebHook"
                }
              }
            },
            "required": true
          },
          "security": [
            {
              "basicAuth": []
            }
          ],
          "responses": {
            "200": {
              "description": "Success"
            },
            "400": {
              "description": "Bad request"
            },
            "401": {
              "description": "Not authorized"
            },
            "403": {
              "description": "Forbidden"
            },
            "404": {
              "description": "Not Found"
            },
            "422": {
              "description": "Invalid parameters"
            },
            "429": {
              "description": "Too Many Requests"
            },
            "500": {
              "description": "Internal error"
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "Invite": {
          "required": [
            "type",
            "name",
            "document",
            "email",
            "phone",
            "reference_id",
            "event",
            "entries"
          ],
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "description": "Informar se o tipo é client ou worker",
              "example": "client"
            },
            "name": {
              "type": "string",
              "description": "Nome da pessoa",
              "example": "John doe"
            },
            "email": {
              "type": "string",
              "description": "E-mail",
              "example": "john@doe.com"
            },
            "document": {
              "type": "string",
              "description": "CPF (somente números)",
              "example": "111111111"
            },
            "phone": {
              "type": "string",
              "description": "telefone (somente números sem código do país e formato brasileiro)",
              "example": "31988776655"
            },
            "reference_id": {
              "type": "string",
              "description": "ID único para identificar compra do participante",
              "example": "123"
            },
            "event": {
              "type": "object",
              "properties": {
                "code": {
                  "type": "string",
                  "description": "Código de referencia",
                  "example": "1"
                },
                "name": {
                  "type": "string",
                  "description": "Nome do evento",
                  "example": "evento de teste"
                },
                "local": {
                  "type": "string",
                  "description": "Local do evento",
                  "example": "Mineirao"
                },
                "start_date": {
                  "type": "string",
                  "description": "Início do evento  (formato: Y-m-d H:i)",
                  "example": "2023-01-02 20:00"
                },
                "end_date": {
                  "type": "string",
                  "description": "Término do evento  (formato: Y-m-d H:i)",
                  "example": "2023-01-03 10:00"
                }
              }
            },
            "entries": {
              "$ref": "#/components/schemas/CreateEntries"
            }
          },
          "xml": {
            "name": "invite"
          }
        },
        "CreateEntries": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "code": {
                "type": "string",
                "description": "código da entrada",
                "example": "1"
              },
              "name": {
                "type": "string",
                "description": "nome da entrada",
                "example": "camarote"
              },
              "release_date_time_begin": {
                "type": "string",
                "description": "Início da liberação (formato: Y-m-d H:i)",
                "example": "2023-01-02 21:00"
              },
              "release_date_time_end": {
                "type": "string",
                "description": "Término da liberação (formato: Y-m-d H:i)",
                "example": "2023-01-03 04:00"
              }
            },
            "example": {
              "code": "1",
              "name": "camarote",
              "release_date_time_begin": "2023-01-02 21:00",
              "release_date_time_end": "2023-01-03 04:00"
            }
          },
          "xml": {
            "name": "createEntries"
          }
        },
        "RetrieveEntries": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "code": {
                "type": "string",
                "description": "código da entrada",
                "example": "1"
              },
              "name": {
                "type": "string",
                "description": "nome da entrada",
                "example": "camarote"
              },
              "release_date_time_begin": {
                "type": "string",
                "description": "Início da liberação (formato: Y-m-d H:i)",
                "example": "2023-01-02 21:00"
              },
              "release_date_time_end": {
                "type": "string",
                "description": "Término da liberação (formato: Y-m-d H:i)",
                "example": "2023-01-03 04:00"
              },
              "reading_date": {
                "type": "string",
                "description": "Data de leitura (formato: Y-m-d H:i:s)",
                "example": "2023-01-03 22:00:00"
              }
            },
            "example": {
              "code": "1",
              "name": "camarote",
              "release_date_time_begin": "2023-01-02 21:00",
              "release_date_time_end": "2023-01-03 04:00",
              "reading_date": "2023-01-02 22:00:00"
            }
          },
          "xml": {
            "name": "retrieveEntries"
          }
        },
        "WebHook": {
          "required": [
            "id",
            "event_type",
            "status",
            "data",
            "created_at",
            "attempts",
            "last_attempt"
          ],
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "description": "ID webhook biomtech",
              "example": "123871"
            },
            "event_type": {
              "type": "string",
              "description": "Tipo de evento do webhook",
              "example": "entry.updated"
            },
            "status": {
              "type": "string",
              "description": "read",
              "example": "read"
            },
            "data": {
              "description": "Dados de leitura",
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "description": "id biomtech",
                    "example": "1"
                  },
                  "myself_id": {
                    "type": "string",
                    "description": "id do myself",
                    "example": "1"
                  },
                  "reference_id": {
                    "type": "string",
                    "description": "id de referencia",
                    "example": "1"
                  },
                  "event_code": {
                    "type": "string",
                    "description": "código do evento",
                    "example": "1"
                  },
                  "entry_code": {
                    "type": "string",
                    "description": "código da entrada",
                    "example": "1"
                  },
                  "reading_date": {
                    "type": "string",
                    "description": "Data de leitura (formato: Y-m-d H:i:S)",
                    "example": "2023-01-02 22:00:00"
                  }
                },
                "example": {
                  "id": "1",
                  "myself_id": "1",
                  "reference_id": "1",
                  "event_code": "1",
                  "entry_code": "123",
                  "reading_date": "2023-01-02 22:00:00"
                }
              }
            },
            "created_at": {
              "type": "string",
              "description": "Data de criacao do webhook (formato: Y-m-d H:i:s)",
              "example": "2023-01-02 22:00:00"
            },
            "attempts": {
              "type": "integer",
              "format": "int8",
              "description": "Número de tentativas",
              "example": "0"
            },
            "last_attempt": {
              "type": "string",
              "description": "Data da última tentativa (formato: Y-m-d H:i:s)",
              "example": "2023-01-02 22:00:00"
            }
          },
          "xml": {
            "name": "invite"
          }
        },
        "RetrieveInvite": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string",
              "description": "ID biomtech",
              "example": "1234"
            },
            "myself_id": {
              "type": "string",
              "description": "ID myself biomtech",
              "example": "1234"
            },
            "type": {
              "type": "string",
              "description": "Informar se o tipo é client ou worker",
              "example": "client"
            },
            "name": {
              "type": "string",
              "description": "Nome da pessoa",
              "example": "John doe"
            },
            "phone": {
              "type": "string",
              "description": "telefone (somente números sem código do país e formato brasileiro)",
              "example": "31988776655"
            },
            "email": {
              "type": "string",
              "description": "E-mail",
              "example": "john@doe.com"
            },
            "document": {
              "type": "string",
              "description": "CPF (somente números)",
              "example": "111111111"
            },
            "reference_id": {
              "type": "string",
              "description": "ID único para identificar compra do participante",
              "example": "123"
            },
            "event": {
              "type": "object",
              "properties": {
                "code": {
                  "type": "string",
                  "description": "código do evento",
                  "example": "1"
                },
                "name": {
                  "type": "string",
                  "description": "Nome do evento",
                  "example": "evento de teste"
                },
                "local": {
                  "type": "string",
                  "description": "Local do evento",
                  "example": "Mineirao"
                },
                "start_date": {
                  "type": "string",
                  "description": "Início do evento  (formato: Y-m-d H:i)",
                  "example": "2023-01-02 20:00"
                },
                "end_date": {
                  "type": "string",
                  "description": "Término do evento  (formato: Y-m-d H:i)",
                  "example": "2023-01-03 10:00"
                }
              }
            },
            "entries": {
              "$ref": "#/components/schemas/RetrieveEntries"
            }
          },
          "xml": {
            "name": "invite"
          }
        },
        "RetrieveInvites": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "description": "ID biomtech",
                "example": "1234"
              },
              "myself_id": {
                "type": "string",
                "description": "ID myself",
                "example": "1234"
              },
              "type": {
                "type": "string",
                "description": "Informar se o tipo é client ou worker",
                "example": "client"
              },
              "name": {
                "type": "string",
                "description": "Nome da pessoa",
                "example": "John doe"
              },
              "document": {
                "type": "string",
                "description": "CPF (somente números)",
                "example": "111111111"
              },
              "phone": {
                "type": "string",
                "description": "telefone (somente números sem código do país e formato brasileiro)",
                "example": "31988776655"
              },
              "reference_id": {
                "type": "string",
                "description": "ID único para identificar compra do participante",
                "example": "123"
              },
              "event": {
                "type": "object",
                "properties": {
                  "code": {
                    "type": "string",
                    "description": "Código do evento",
                    "example": "1"
                  },
                  "name": {
                    "type": "string",
                    "description": "Nome do evento",
                    "example": "evento de teste"
                  },
                  "local": {
                    "type": "string",
                    "description": "Local do evento",
                    "example": "Mineirao"
                  },
                  "start_date": {
                    "type": "string",
                    "description": "Início do evento  (formato: Y-m-d H:i)",
                    "example": "2023-01-02 20:00"
                  },
                  "end_date": {
                    "type": "string",
                    "description": "Término do evento  (formato: Y-m-d H:i)",
                    "example": "2023-01-03 10:00"
                  }
                }
              },
              "entries": {
                "$ref": "#/components/schemas/RetrieveEntries"
              }
            }
          },
          "xml": {
            "name": "invites"
          }
        },
        "RetrieveInvitesPagination": {
          "type": "object",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string",
                    "description": "ID biomtech",
                    "example": "1234"
                  },
                  "myself_id": {
                    "type": "string",
                    "description": "ID myself",
                    "example": "1234"
                  },
                  "type": {
                    "type": "string",
                    "description": "Informar se o tipo é client ou worker",
                    "example": "client"
                  },
                  "name": {
                    "type": "string",
                    "description": "Nome da pessoa",
                    "example": "John doe"
                  },
                  "document": {
                    "type": "string",
                    "description": "CPF (somente números)",
                    "example": "111111111"
                  },
                  "phone": {
                    "type": "string",
                    "description": "telefone (somente números sem código do país e formato brasileiro)",
                    "example": "31988776655"
                  },
                  "reference_id": {
                    "type": "string",
                    "description": "ID único para identificar compra do participante",
                    "example": "123"
                  },
                  "event": {
                    "type": "object",
                    "properties": {
                      "code": {
                        "type": "string",
                        "description": "Código do evento",
                        "example": "1"
                      },
                      "name": {
                        "type": "string",
                        "description": "Nome do evento",
                        "example": "evento de teste"
                      },
                      "local": {
                        "type": "string",
                        "description": "Local do evento",
                        "example": "Mineirao"
                      },
                      "start_date": {
                        "type": "string",
                        "description": "Início do evento  (formato: Y-m-d H:i)",
                        "example": "2023-01-02 20:00"
                      },
                      "end_date": {
                        "type": "string",
                        "description": "Término do evento  (formato: Y-m-d H:i)",
                        "example": "2023-01-03 10:00"
                      }
                    }
                  },
                  "entries": {
                    "$ref": "#/components/schemas/RetrieveEntries"
                  }
                }
              }
            },
            "paging": {
              "type": "object",
              "properties": {
                "total": {
                  "type": "integer",
                  "format": "int32",
                  "description": "Total de páginas",
                  "example": "10"
                },
                "previous": {
                  "type": "integer",
                  "format": "int32",
                  "description": "Página anterior",
                  "example": "2"
                },
                "next": {
                  "type": "string",
                  "description": "url da página posterior",
                  "example": "{url}?page=2&size=1000"
                }
              }
            }
          },
          "xml": {
            "name": "invites"
          }
        },
        "CancelEntries": {
          "type": "array",
          "items": {
            "type": "string",
            "example": "123"
          },
          "xml": {
            "name": "cancelEntry"
          }
        }
      },
      "securitySchemes": {
        "basicAuth": {
          "type": "http",
          "scheme": "basic"
        },
        "api_key": {
          "type": "apiKey",
          "name": "Authorization",
          "in": "header"
        }
      }
    }
  }
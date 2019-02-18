1. `npm install`
2. `npm start`

http://localhost:3000 - strona sklepu
http://localhost:4000 - fake rest api

-- products:
lista wszystkich produktów
GET /products
pobranie pojedynczego produktu
GET /products/1
utworzenie produktu
POST /products
aktualizacja danych produktu
PATCH /products/1
usunięcie produktu
DELETE /products/1

-- groups (grupy produktów):
lista wszystkich grup
GET /groups
dodanie grupy
POST /groups
aktualizacja wybranej grupy
PATCH /groups/1
wyświetlenie grupy o podanym id
GET /groups/1

-- carts:
utworzenie pustego koszyka
GET /cart
pobranie elementów z pustego koszyka
GET /cart
dodanie elementów (produktów) do koszyka
POST /cart
usunięcie konkretnego produktu z koszyka
DELETE /cart/1
utworzenie zamówienia na podstawie koszyka
POST /orders

-- orders:
lista wszystkich zamówień
GET /orders
dodanie nowego zamówienia
POST /orders
wyświetlenie zamówienia
GET /orders
aktualizacja zamówienia
PATCH /orders
usunięcie zamówienia
DELETE /orders/1

-- users:
utworzenie użytkownika
POST /users
zablokowanie użytkownika
PATCH /users/1
wygenerowanie losowego klucza ważnego godzinę po podaniu poprawnych danych użytkownika
PATCH /users/1
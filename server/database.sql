CREATE DATABASE pernstack;

CREATE TABLE jwtauth(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
)


türkçe anlat ama uzun uzun anlatmana gerek yok tablodaki columnlara nasıl eklerim mesela uuid_generate_v4() bunu default olarak tablodaki columna ekleyemiyorum

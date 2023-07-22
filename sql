--Database creation
create database movie;
use movie;

--Creating and storing values in tables
create table directors(director_id varchar(50) primary key,director_name varchar(50));
insert into directors values("SSR10","S S Rajamouli"),("Suj11","Sujeeth"),("RKK12","Radha Krishna Kumar"),("OR13","Om Raut");
select * from directors;

create table movies(movie_id int(10) primary key,title varchar(50),release_year int(4),director_id varchar(10),foreign key(director_id) references directors(director_id));
insert into movies values(10,"Baahubali2",2017,"SSR10"),(11,"Saaho",2019,"Suj11"),(12,"Radhe Shyam",2022,"RKK12"),(13,"Adipurush",2023,"OR13");
select * from movies;

create table genres(genre_id varchar(10) primary key,genre_name varchar(30));
insert into genres values("G1","Action,Romance"),("G2","Action,Triller"),("G3","Romance");
select * from genres;

create table movie_genres(movie_id int(10),genre_id varchar(10),foreign key(movie_id) references movies(movie_id),foreign key(genre_id) references genres(genre_id));
insert into movie_genres values(10,"G1"),(11,"G2"),(12,"G3"),(13,"G1");
select * from movie_genres;

--Task1
select m.title,d.director_name from movies m,directors d where m.director_id=d.director_id;

--Task2
select m.title,m.release_year,d.director_name from movies m join directors d on m.director_id=d.director_id;

--Task3
select d.director_name,m.title from directors d join movies m on d.director_id=m.director_id;

--Task4
select m.title,m.release_year,d.director_name from movies m join directors d on m.director_id=d.director_id and d.director_name!="";

--Task5
select m.title,g.genre_name from movies m join movie_genres mg on m.movie_id=mg.movie_id join genres g on mg.genre_id=g.genre_id;


create table employees(
	empId int primary key,
    empName varchar(20) not null
);


insert into employees values
(4580, 'Bejesh'),
(4579, 'natheesh'),
(4578, 'Selva'),
(4577, 'Sankarasan');


create table admins(
	userName varchar(20) not null,
    userPassword varchar(20) not null
);

insert into admins values
('Admin', 'Admin@123');


create table attendance(
	empId int primary key,
    empName varchar(20) not null,
    inTime time default null,
    outTime time default null
); 


select * from employees;
select * from admins;
select * from attendance;
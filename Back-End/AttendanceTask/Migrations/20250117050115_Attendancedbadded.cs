using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AttendanceTask.Migrations
{
    /// <inheritdoc />
    public partial class Attendancedbadded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "admins",
                columns: table => new
                {
                    userName = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    userPassword = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                });

            migrationBuilder.CreateTable(
                name: "attendance",
                columns: table => new
                {
                    empId = table.Column<int>(type: "int", nullable: false),
                    empName = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false),
                    inTime = table.Column<TimeOnly>(type: "time", nullable: true, defaultValueSql: "(NULL)"),
                    outTime = table.Column<TimeOnly>(type: "time", nullable: true, defaultValueSql: "(NULL)")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__attendan__AFB3EC0D70B67406", x => x.empId);
                });

            migrationBuilder.CreateTable(
                name: "employees",
                columns: table => new
                {
                    empId = table.Column<int>(type: "int", nullable: false),
                    empName = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__employee__AFB3EC0DBACBDA35", x => x.empId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "admins");

            migrationBuilder.DropTable(
                name: "attendance");

            migrationBuilder.DropTable(
                name: "employees");
        }
    }
}

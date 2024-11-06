﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UM.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class addnewcolumnDescription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Comment",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Comment");
        }
    }
}

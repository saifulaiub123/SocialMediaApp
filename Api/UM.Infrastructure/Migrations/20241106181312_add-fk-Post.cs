using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UM.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class addfkPost : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddForeignKey(
                name: "FK_Post_AspNetUsers_CreatedBy",
                table: "Post",
                column: "CreatedBy",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Post_AspNetUsers_CreatedBy",
                table: "Post");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace BikePackJournal.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO BikeMakes (Name) VALUES ('Salsa')");
            migrationBuilder.Sql("INSERT INTO BikeMakes (Name) VALUES ('Cannondale')");
            migrationBuilder.Sql("INSERT INTO BikeMakes (Name) VALUES ('Trek')");
            migrationBuilder.Sql("INSERT INTO BikeMakes (Name) VALUES ('Scott')");

            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Cutthroat',(SELECT ID FROM BikeMakes WHERE Name = 'Salsa'))");
            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Warbird',(SELECT ID FROM BikeMakes WHERE Name = 'Salsa'))");
            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Horse Theif',(SELECT ID FROM BikeMakes WHERE Name = 'Salsa'))");

            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Habit',(SELECT ID FROM BikeMakes WHERE Name = 'Cannondale'))");
            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Topstone',(SELECT ID FROM BikeMakes WHERE Name = 'Cannondale'))");
            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('SuperX',(SELECT ID FROM BikeMakes WHERE Name = 'Cannondale'))");

            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Boone',(SELECT ID FROM BikeMakes WHERE Name = 'Trek'))");
            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Checkpoint',(SELECT ID FROM BikeMakes WHERE Name = 'Trek'))");
            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Farley',(SELECT ID FROM BikeMakes WHERE Name = 'Trek'))");

            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Genius',(SELECT ID FROM BikeMakes WHERE Name = 'Scott'))");
            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Spark',(SELECT ID FROM BikeMakes WHERE Name = 'Scott'))");
            migrationBuilder.Sql("INSERT INTO BikeModels (Name, BikeMakeId) VALUES ('Addict',(SELECT ID FROM BikeMakes WHERE Name = 'Scott'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM BikeMakes WHERE Name IN ('Salsa', 'Cannondale', 'Trek', 'Scott')");
        }
    }
}

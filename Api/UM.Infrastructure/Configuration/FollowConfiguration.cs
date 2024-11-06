using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UM.Domain.DBModel;

namespace UM.Infrastructure.Configuration
{
    public class FollowConfiguration : IEntityTypeConfiguration<Follow>
    {
        public void Configure(EntityTypeBuilder<Follow> builder)
        {
            builder.HasIndex(x => x.CreatedBy)
               .IsUnique(false);
            builder.HasIndex(x => x.UpdatedBy)
               .IsUnique(false);

            builder.Property(x => x.IsDeleted)
                .HasDefaultValue(false);
          

            //builder.HasOne(x => x.CreatedByUser)
            //   .WithOne(y => y.CreatedByFollow)
            //   .HasForeignKey<Follow>(z => z.CreatedBy)
            //   .OnDelete(DeleteBehavior.Restrict);

            //builder.HasOne(x => x.UpdateByUser)
            //   .WithOne(y => y.UpdatedByFollow)
            //   .HasForeignKey<Follow>(z => z.UpdatedBy)
            //   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
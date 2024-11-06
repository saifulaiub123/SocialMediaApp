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


            builder.HasOne(x => x.User)
               .WithMany(y => y.UserToFollow)
               .HasForeignKey(z => z.UserId)
               .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(x => x.UserFollowedBy)
              .WithMany(y => y.FollowedByUser)
              .HasForeignKey(z => z.FollowedBy)
              .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
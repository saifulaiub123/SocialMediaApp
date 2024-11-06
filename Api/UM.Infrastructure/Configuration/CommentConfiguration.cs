using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UM.Domain.DBModel;

namespace UM.Infrastructure.Configuration
{
    public class CommentConfiguration : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            builder.HasIndex(x => x.CreatedBy)
               .IsUnique(false);
            builder.HasIndex(x => x.UpdatedBy)
               .IsUnique(false);

            builder.Property(x => x.IsDeleted)
                .HasDefaultValue(false);


            //builder.HasOne(x => x.CreatedByUser)
            //   .WithOne(y => y.CreatedByComment)
            //   .HasForeignKey<Comment>(z => z.CreatedBy)
            //   .OnDelete(DeleteBehavior.Restrict);

            //builder.HasOne(x => x.UpdateByUser)
            //   .WithOne(y => y.UpdatedByComment)
            //   .HasForeignKey<Comment>(z => z.UpdatedBy)
            //   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UM.Domain.DBModel;

namespace UM.Infrastructure.Configuration
{
    public class VoteConfiguration : IEntityTypeConfiguration<Vote>
    {
        public void Configure(EntityTypeBuilder<Vote> builder)
        {
            //builder.HasIndex(x => x.CreatedBy)
            //   .IsUnique(false);
            //builder.HasIndex(x => x.UpdatedBy)
            //   .IsUnique(false);

            //builder.Property(x => x.IsDeleted)
            //    .HasDefaultValue(false);
            //builder.Property(x => x.Name)
                //.HasMaxLength(250);



            //builder.HasOne(x => x.CreatedByUser)
            //   .WithOne(y => y.CreatedByVote)
            //   .HasForeignKey<Vote>(z => z.CreatedBy)
            //   .OnDelete(DeleteBehavior.Restrict);

            //builder.HasOne(x => x.UpdateByUser)
            //   .WithOne(y => y.UpdatedByVote)
            //   .HasForeignKey<Vote>(z => z.UpdatedBy)
            //   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
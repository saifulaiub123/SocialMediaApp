using Microsoft.Extensions.DependencyInjection;
using UM.Domain.IRepository;
using UM.Infrastructure.Repository;

namespace UM.Infrastructure.Dependency
{
    public static class RepositoryResolutionConfiguration
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            #region Repositories
            services.AddScoped<IFollowRepository, FollowRepository>();
            services.AddScoped<IOtpRepository, OtpRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<IPostRepository, PostRepository>();
            #endregion

            return services;

        }
    }
}

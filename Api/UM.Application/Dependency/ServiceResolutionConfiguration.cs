using UM.Application.IService;
using UM.Application.Service;
using UM.Domain.IEntity;
using Microsoft.Extensions.DependencyInjection;
using UM.Infrastructure.Repository;

namespace UM.Application.Dependency
{
    public static class ServiceResolutionConfiguration
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            #region Services

            services.AddScoped<IOtpService, OtpService>();
            services.AddScoped<ICurrentUser, CurrentUser>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ICountryService, CountryService>();
            services.AddScoped<IPostService, PostService>();

            #endregion
            return services;
        }
    }
}

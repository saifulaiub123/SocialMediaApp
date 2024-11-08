﻿
namespace UM.Domain.ViewModel
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public List<UserRoleViewModel> UserRoles { get; set; }
    }
}

User.destroy_all
List.destroy_all

u = User.new(first_name: "David", last_name: "Ma", email: "dma315@gmail.com")
u.password = "password"
u.save

l1 = List.create(title: "My list", creator: u, description: "Awesome list")
l2 = List.create(title: "My other list", creator: u, description: "Really awesome list")
l3 = List.create(title: "My third list", creator: u, description: "Really awesome stuff")
User.destroy_all
List.destroy_all

u = User.new(first_name: "David", last_name: "Ma", email: "dma315@gmail.com")
u2 = User.
u.password = "password"
u.save

l1 = List.create(title: "Chicago's Best Donuts", creator: u, description: "Fried dough is great!")
l2 = List.create(title: "Chicago's Best Pizza", creator: u, description: "Pizza is a vegetable")
l3 = List.create(title: "Chicago's Best Ramen", creator: u, description: "May he touch you with his noodly appendage")
l4 = List.create(title: "Famous Golf Courses", creator: u, description: "These are probably really expensive")
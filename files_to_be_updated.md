Files to edit:
1. Users
  - Users need an address (one to many relationship), so an association needs to be added to model and maybe mutation
  - Users also need an image attribute, so the user mutation + model will need to be updated
  - Users also need a 'personal description' attribute, so the model and mutations will need to be changed, and maybe the Types file

2. Products
  - Need a relationship with Crates, so an association between them will need to be created in the Product model and mutation files


4. Schema (create address table that belongs to User, also joins table for products and crates)

dotnet -h
dotnet new list
dotnet sln list
---------------------
dotnet dev-certs https
--
dotnet dev-certs https --clean
dotnet dev-certs https --trust
---------------------------------
dotnet watch run
dotnet watch --no-hot-reload
---------------------------------
dotnet-ef (nuget)
nuget.org/packages/dotnet-ef

dotnet tool install --global dotnet-ef --version 7.0.3 (copied from web site)
dotnet tool list -g
dotnet tool update --global dotnet-ef --version 7.0.3
------------------------------------------
cd API
dotnet ef migrations add InitialCreate -o Data/Migrations
dotnet ef database update
dotnet ef migrations add InitialCreate -p Infrastructure -s API -o Data/Migrations
--
dotnet ef database drop -p Infrastructure -s API
dotnet ef migrations remove -p Infrastructure -s API
--
Command Pallet> Sqlite > open sql lite skinet
---
dotnet ef database drop

----------------------------------------
oh my zsh (www.ohmyz.sh)
-----------------------------------
dotnet new gitignore
----------------------------------
git status
git init
git branch -m main
git checkout main
git merge section2
git merge --abort
git push
-----------------------------
docker.com/products/docker-desktop
docker-compose up --detach





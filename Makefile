.PHONY: run-db
run-db: 
	@echo "Starting Postgres container..."
	sudo kill -9 `sudo lsof -t -i:5432`
	docker run -p 5432:5432 -e POSTGRES_PASSWORD=password! -e POSTGRES_USER=admin -e POSTGRES_DB=next-food.dev -d postgres:latest
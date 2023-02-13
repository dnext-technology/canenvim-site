docker login registry.gitlab.com
docker build -t registry.gitlab.com/canevim/site:arm64-dev . --platform linux/arm64
docker push registry.gitlab.com/canevim/site:arm64-dev

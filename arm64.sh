docker login registry.gitlab.com
docker build -t registry.gitlab.com/zorgundostu/frontend:arm64-dev . --platform linux/arm64
docker push registry.gitlab.com/zorgundostu/frontend:arm64-dev

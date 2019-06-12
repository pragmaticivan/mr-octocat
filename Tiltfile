# Deploy: tell Tilt what YAML to deploy
k8s_yaml('./kubernetes/local.yml')

# Build: tell Tilt what images to build from which directories
docker_build('mr-octocat', './')
# ...

# Watch: tell Tilt how to connect locally (optional)
k8s_resource('mr-octocat', port_forwards=3000)

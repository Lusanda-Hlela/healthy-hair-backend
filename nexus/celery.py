import os
from celery import Celery

# Default Django settings module
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "nexus.settings")

app = Celery("nexus")

# Connect to RabbitMQ container
app.conf.broker_url = "amqp://guest:guest@nexus_rabbitmq:5672//"

# Auto-discover tasks from installed apps
app.autodiscover_tasks()

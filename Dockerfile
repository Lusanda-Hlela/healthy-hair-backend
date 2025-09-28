# Dockerfile (for Render deployment)
FROM python:3.11-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# System deps
RUN apt-get update && apt-get install -y \
  libpq-dev gcc curl \
  && rm -rf /var/lib/apt/lists/*

# Install Python deps
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . /app/

# Expose (informational)
EXPOSE 8000

# Use gunicorn and bind to Render's $PORT (fallback to 8000)
CMD ["sh", "-c", "gunicorn nexus.wsgi --bind 0.0.0.0:${PORT:-8000}"]

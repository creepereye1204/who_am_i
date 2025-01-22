# Generated by Django 5.1.1 on 2025-01-22 12:21

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectinfo',
            name='user_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='api.user'),
            preserve_default=False,
        ),
    ]

# Generated by Django 4.1.4 on 2022-12-29 03:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("b_users", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Post",
            fields=[
                ("post_id", models.AutoField(primary_key=True, serialize=False)),
                ("title", models.CharField(max_length=100)),
                ("content", models.CharField(max_length=100)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "blog_user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="b_users.buser"
                    ),
                ),
            ],
            options={
                "db_table": "blog_posts",
            },
        ),
    ]

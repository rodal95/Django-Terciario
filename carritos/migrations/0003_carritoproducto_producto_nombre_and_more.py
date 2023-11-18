# Generated by Django 4.2.7 on 2023-11-14 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carritos', '0002_carritoproducto_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='carritoproducto',
            name='producto_nombre',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='carritoproducto',
            name='precio_producto',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='carritoproducto',
            name='subtotal',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]
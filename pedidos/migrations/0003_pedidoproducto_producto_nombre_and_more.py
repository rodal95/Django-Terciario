# Generated by Django 4.2.7 on 2023-11-14 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pedidos', '0002_pedidoproducto_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='pedidoproducto',
            name='producto_nombre',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='pedidoproducto',
            name='precio_producto',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
        migrations.AlterField(
            model_name='pedidoproducto',
            name='subtotal',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]

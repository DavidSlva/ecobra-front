import React, { useState } from 'react';
import { Form, Input, Button, List, Card } from 'antd';

export default function Home() {
    const [form] = Form.useForm();
    const [products, setProducts] = useState([]);
    const [productForm] = Form.useForm();

    const handleAddProduct = (values) => {
        setProducts([...products, values]);
        productForm.resetFields();
    };

    const handleFinish = (values) => {
        console.log('Lote Details:', values);
        console.log('Products:', products);
        // Aquí puedes enviar los datos a tu backend o realizar otras acciones necesarias
    };

    return (
        <Card className="p-8">
            <h1 className="text-2xl mb-4">Formulario Lote</h1>
            <Form form={form} onFinish={handleFinish} layout="vertical">
                <div className='flex flex-row space-between'>
                    <Form.Item name="nombreLote" label="Nombre del Lote" rules={[{ required: true, message: 'Por favor ingresa el nombre del lote' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="descripcionLote" label="Descripción del Lote" rules={[{ required: true, message: 'Por favor ingresa la descripción del lote' }]}>
                        <Input />
                    </Form.Item>
                </div>
  
                <Form.Item name="ubicacion" label="Ubicación" rules={[{ required: true, message: 'Por favor ingresa la ubicación' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="precio" label="Precio" rules={[{ required: true, message: 'Por favor ingresa el precio' }]}>
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">Guardar Lote</Button>
            </Form>

            <h2 className="text-xl mt-8 mb-4">Agregar Producto</h2>
            <Form form={productForm} onFinish={handleAddProduct} layout="vertical">
                <Form.Item name="nombreProducto" label="Nombre del Producto" rules={[{ required: true, message: 'Por favor ingresa el nombre del producto' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="descripcionProducto" label="Descripción del Producto" rules={[{ required: true, message: 'Por favor ingresa la descripción del producto' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="cantidadUnidades" label="Cantidad de Unidades" rules={[{ required: true, message: 'Por favor ingresa la cantidad de unidades' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="pesoProducto" label="Peso del Producto" rules={[{ required: true, message: 'Por favor ingresa el peso del producto' }]}>
                    <Input />
                </Form.Item>
                <Button type="primary" htmlType="submit">Agregar Producto</Button>
            </Form>

            <h2 className="text-xl mt-8 mb-4">Lista de Productos</h2>
            <List
                bordered
                dataSource={products}
                renderItem={(item, index) => (
                    <List.Item key={index}>
                        <div>
                            <p><strong>Nombre del Producto:</strong> {item.nombreProducto}</p>
                            <p><strong>Descripción:</strong> {item.descripcionProducto}</p>
                            <p><strong>Cantidad de Unidades:</strong> {item.cantidadUnidades}</p>
                            <p><strong>Peso:</strong> {item.pesoProducto}</p>
                        </div>
                    </List.Item>
                )}
            />
        </Card>
    );
}

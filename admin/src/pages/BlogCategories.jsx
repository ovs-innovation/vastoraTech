import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Input, Select, Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader } from "@windmill/react-ui";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import PageTitle from "@/components/Typography/PageTitle";
import BlogServices from "@/services/BlogServices";
import requests from "@/services/httpService";
import { notifyError, notifySuccess } from "@/utils/toast";

const BlogCategories = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ id: null, name: "", description: "", status: "active" });

  const fetchData = async () => {
    try {
      const res = await requests.get("/blog-categories/");
      if (res?.success) setItems(res.data);
    } catch (_e) {
      notifyError("Failed to load categories");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submit = async () => {
    try {
      setLoading(true);
      if (form.id) {
        await requests.put(`/blog-categories/${form.id}`, {
          name: form.name,
          description: form.description,
          status: form.status,
        });
        notifySuccess("Category updated");
      } else {
        await requests.post(`/blog-categories/`, {
          name: form.name,
          description: form.description,
          status: form.status,
        });
        notifySuccess("Category created");
      }
      setForm({ id: null, name: "", description: "", status: "active" });
      fetchData();
    } catch (e) {
      notifyError(e?.response?.data?.message || "Save failed");
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id) => {
    try {
      await requests.delete(`/blog-categories/${id}`);
      notifySuccess("Category deleted");
      fetchData();
    } catch (_e) {
      notifyError("Delete failed");
    }
  };

  return (
    <>
      <PageTitle>Blog Categories</PageTitle>

      <Card className="mb-4">
        <CardBody>
          <div className="grid gap-4 md:grid-cols-4">
            <Input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Input placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <Select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </Select>
            <div className="flex gap-2">
              <Button onClick={submit} disabled={loading || !form.name.trim()}>{form.id ? "Update" : "Create"}</Button>
              {form.id && (
                <Button layout="outline" onClick={() => setForm({ id: null, name: "", description: "", status: "active" })}>
                  Cancel
                </Button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Name</TableCell>
              <TableCell>Slug</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell className="text-right">Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {items.map((c) => (
              <tr key={c._id}>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.slug}</TableCell>
                <TableCell>{c.description}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs ${c.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{c.status}</span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => setForm({ id: c._id, name: c.name, description: c.description || "", status: c.status })} className="p-2 rounded bg-gray-100 hover:bg-gray-200">
                      <FiEdit2 />
                    </button>
                    <button onClick={() => remove(c._id)} className="p-2 rounded bg-red-100 hover:bg-red-200">
                      <FiTrash2 />
                    </button>
                  </div>
                </TableCell>
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default BlogCategories;



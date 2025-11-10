import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Table,
  TableHeader,
  TableCell,
  TableFooter,
  TableContainer,
  TableBody,
  TableRow,
  Input,
  Button,
  Select,
  Pagination,
} from "@windmill/react-ui";
import Status from '@/components/table/Status';
import AnimatedContent from '@/components/common/AnimatedContent';
import PageTitle from '@/components/Typography/PageTitle';

const BlogComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloading, setReloading] = useState(false);

  // Filters
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [blog, setBlog] = useState("");

  // Pagination (client, for now)
  const [page, setPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    setLoading(true);
    fetch(
      process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/blog-comments`
        : 'http://localhost:8081/api/blog-comments/'
    )
      .then(res => res.json())
      .then(res => setComments(res.data || []))
      .catch(() => setError('Could not load comments'))
      .finally(() => setLoading(false));
  }, [reloading]);

  // Unique blog list for filtering
  const blogOptions = Array.from(new Set(comments.map(c => c.blogId?.slug ? `${c.blogId.slug}|||${c.blogId.title}` : null))).filter(Boolean);

  // Filter logic
  const filteredComments = comments.filter(c => {
    const matchesSearch = search === "" || (
      c.name?.toLowerCase().includes(search.toLowerCase()) ||
      c.comment?.toLowerCase().includes(search.toLowerCase()) ||
      c.email?.toLowerCase().includes(search.toLowerCase())
    );
    const matchesStatus = status === "" || c.status === status;
    const matchesBlog = blog === "" || (c.blogId && (c.blogId.slug + "|||" + c.blogId.title) === blog);
    return matchesSearch && matchesStatus && matchesBlog;
  });

  // Paginate
  const paged = filteredComments.slice((page-1)*limit, page*limit);
  const pageCount = Math.ceil(filteredComments.length / limit);

  const clearFilters = () => {
    setSearch(""); setStatus(""); setBlog(""); setPage(1);
  };

  const approveComment = async (id) => {
    await fetch(
      process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/blog-comments/${id}/approve`
        : `http://localhost:8081/api/blog-comments/${id}/approve`,
      { method: "PATCH" }
    );
    setReloading(r => !r);
  };

  const deleteComment = async (id) => {
    await fetch(
      process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/blog-comments/${id}`
        : `http://localhost:8081/api/blog-comments/${id}`,
      { method: "DELETE" }
    );
    setReloading(r => !r);
  };

  return (
    <AnimatedContent>
      <PageTitle>Blog Comments</PageTitle>
      <Card className="min-w-0 shadow-xs">
        <CardBody>
          {/* Filters */}
          <form className="py-3 grid gap-4 md:gap-6 xl:gap-6 md:flex xl:flex items-end">
            <div className="w-full md:w-56">
              <Input
                value={search}
                onChange={e => setSearch(e.target.value)}
                type="search"
                name="search"
                placeholder="Search name, email, or comment..."
              />
            </div>
            <div className="w-full md:w-56">
              <Select value={blog} onChange={e=>{setBlog(e.target.value); setPage(1);}}>
                <option value="">All Blogs</option>
                {blogOptions.map(val => {
                  const [slug, title] = val.split('|||');
                  return <option key={slug} value={val}>{title}</option>
                })}
              </Select>
            </div>
            <div className="w-full md:w-44">
              <Select value={status} onChange={e=>{setStatus(e.target.value); setPage(1)}}>
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Button type="button" className="h-12 bg-blue-700" onClick={()=>setPage(1)}>Filter</Button>
              <Button layout="outline" type="reset" className="px-4 h-12 text-sm" onClick={clearFilters}>Reset</Button>
            </div>
          </form>
        </CardBody>
      </Card>
      <Card className="min-w-0 shadow-xs overflow-hidden mb-8 mt-6">
        <CardBody>
          <TableContainer>
            <Table>
              <TableHeader>
                <tr>
                  <TableCell>Blog</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Comment</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Submitted</TableCell>
                  <TableCell>Actions</TableCell>
                </tr>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={7}>Loading...</TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={7}>{error}</TableCell>
                  </TableRow>
                ) : paged.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7}>No comments found.</TableCell>
                  </TableRow>
                ) : paged.map(c => (
                  <TableRow key={c._id} className="transition duration-150 ease-in-out hover:bg-blue-50">
                    <TableCell>
                      {c.blogId?.slug ? (
                        <a className="text-blue-700 underline font-medium">
                          {c.blogId.title}
                        </a>
                      ) : (c.blogId?.title || "-")}
                    </TableCell>
                    <TableCell>{c.name}</TableCell>
                    <TableCell><span className="text-xs text-gray-700">{c.email}</span></TableCell>
                    <TableCell>
                      <span className="block max-w-xs whitespace-pre-line break-all">{c.comment}</span>
                    </TableCell>
                    <TableCell>
                      <Status status={c.status.charAt(0).toUpperCase() + c.status.slice(1)} />
                    </TableCell>
                    <TableCell>{new Date(c.createdAt).toLocaleString()}</TableCell>
                    <TableCell>
                      {c.status !== 'approved' && (
                        <Button size="small" className="mr-2 bg-green-500 hover:bg-green-600 text-white" onClick={()=>approveComment(c._id)}>
                          Approve
                        </Button>
                      )}
                      <Button size="small" className="bg-red-500 hover:bg-red-600 text-white" onClick={()=>deleteComment(c._id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {pageCount > 1 && (
            <TableFooter>
              <Pagination
                totalResults={filteredComments.length}
                resultsPerPage={limit}
                onChange={p => setPage(p)}
                label="Blog comments page navigation"
              />
            </TableFooter>
          )}
        </CardBody>
      </Card>
    </AnimatedContent>
  );
};

export default BlogComments;

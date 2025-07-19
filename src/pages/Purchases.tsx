import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import purchases from "@/data/purchases.json";
import products from "@/data/products.json";

export default function Purchases() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">إدارة المشتريات</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>إضافة فاتورة شراء</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>إضافة فاتورة شراء</DialogTitle>
              <DialogDescription>
                أدخل تفاصيل الفاتورة الجديدة هنا.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="mt-4">
                <h3 className="text-lg font-medium">المنتجات</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>المنتج</TableHead>
                      <TableHead>الكمية</TableHead>
                      <TableHead>السعر</TableHead>
                      <TableHead>الإجمالي</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Add product rows here */}
                  </TableBody>
                </Table>
                <Button variant="outline" size="sm" className="mt-2">
                  إضافة منتج
                </Button>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">إضافة الفاتورة</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>التاريخ</TableHead>
              <TableHead>الإجمالي</TableHead>
              <TableHead>الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchases.map((purchase) => (
              <TableRow key={purchase.id}>
                <TableCell>{purchase.date}</TableCell>
                <TableCell>{purchase.total}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    عرض التفاصيل
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

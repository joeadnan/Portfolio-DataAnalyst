# SQL Query Documentation

## Tujuan Query

Membuat laporan invoice dan payment untuk melihat status pembayaran, sisa tagihan, dan aging piutang.

## Tabel yang Digunakan

- customers
- invoices
- payments

## Contoh Struktur Query

```sql
SELECT
  i.invoice_no,
  c.customer_name,
  i.invoice_date,
  i.due_date,
  i.total_amount,
  COALESCE(SUM(p.amount), 0) AS paid_amount,
  i.total_amount - COALESCE(SUM(p.amount), 0) AS outstanding_amount,
  CASE
    WHEN COALESCE(SUM(p.amount), 0) = 0 THEN 'Unpaid'
    WHEN COALESCE(SUM(p.amount), 0) < i.total_amount THEN 'Partial'
    ELSE 'Paid'
  END AS payment_status
FROM invoices i
JOIN customers c ON c.id = i.customer_id
LEFT JOIN payments p ON p.invoice_id = i.id
GROUP BY i.invoice_no, c.customer_name, i.invoice_date, i.due_date, i.total_amount;
```

## Catatan Analisis

- Invoice unpaid perlu diprioritaskan untuk follow-up.
- Aging piutang membantu finance melihat risiko keterlambatan pembayaran.

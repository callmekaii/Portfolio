export function Divider({text})
{
    return(
    <div class="flex items-center gap-2 w-full max-w-100 mb-20 mt-20">
  <span class="shrink-0 text-muted-foreground">{text}</span>
  <div class="flex-1 border-b border-primary"></div>
</div>
    )
}
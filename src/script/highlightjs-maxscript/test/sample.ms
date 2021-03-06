global var -- Line Comment

/*
Block Comment
*/
struct TestClass (
  public
  Literals = #(
    1, .1e-2, 1.2, -0., 0x0E, "String", @"Verbatim", #Name, true,
    2m30s5f2t, 18.25f, 2:10.0, $'Node Name', #{1..3, 5}
  ),

  private
  rlt = Rollout rlt "Title" (
    CheckBox ckbx "Caption" checked:false triState:0
    on ckbx Changed state do (
      -- ...
    )
  ),

  public
  function TestFunction pA &pB pC:false &pD:1.2 pE:#(1, 2) pF: = (
    -- ...
  ),

  private
  mapped fn compare x y = (
    -- ...
  ),

  private
  on Create do (
    -- ...
  )
)

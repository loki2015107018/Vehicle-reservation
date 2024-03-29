//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class VehicleInfo
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public VehicleInfo()
        {
            this.BookingDatas = new HashSet<BookingData>();
        }
    
        public long VehicleId { get; set; }
        public string VehicleNumber { get; set; }
        public Nullable<int> BranchCode { get; set; }
        public string VehicleType { get; set; }
        public Nullable<System.DateTime> InsuranceExpiryDate { get; set; }
        public Nullable<System.DateTime> LastServicedDate { get; set; }
        public Nullable<System.DateTime> ServiceDueDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<long> PriceperDay { get; set; }
        public string Model { get; set; }
        public Nullable<int> Year { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BookingData> BookingDatas { get; set; }
        public virtual BranchMaster BranchMaster { get; set; }
    }
}
